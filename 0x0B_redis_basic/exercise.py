#!/usr/bin/env python3
"""Module for Redis cache implementation using the redis-py client."""

import redis
import uuid
import functools
from typing import Union, Callable, Optional


def count_calls(method: Callable) -> Callable:
    """Decorator that counts how many times a Cache method is called."""
    @functools.wraps(method)
    def wrapper(self, *args, **kwargs):
        """Increment the call counter in Redis and call the original method."""
        self._redis.incr(method.__qualname__)
        return method(self, *args, **kwargs)
    return wrapper


def call_history(method: Callable) -> Callable:
    """Decorator that stores the history of inputs and outputs for a method."""
    @functools.wraps(method)
    def wrapper(self, *args, **kwargs):
        """Store input arguments and output result in Redis lists."""
        self._redis.rpush(method.__qualname__ + ":inputs", str(args))
        output = method(self, *args, **kwargs)
        self._redis.rpush(method.__qualname__ + ":outputs", output)
        return output
    return wrapper


class Cache:
    """Cache class for storing and retrieving data in Redis."""

    def __init__(self) -> None:
        """Initialize a Redis client instance and flush the database."""
        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store data in Redis under a randomly generated UUID key and return the key."""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None) -> Union[str, bytes, int, float, None]:
        """Retrieve data from Redis and optionally apply a conversion function."""
        data = self._redis.get(key)
        if data is None:
            return None
        if fn is not None:
            return fn(data)
        return data

    def get_str(self, key: str) -> str:
        """Retrieve a value from Redis and decode it as a UTF-8 string."""
        return self.get(key, fn=lambda d: d.decode("utf-8"))

    def get_int(self, key: str) -> int:
        """Retrieve a value from Redis and convert it to an integer."""
        return self.get(key, fn=int)


def replay(method: Callable) -> None:
    """Display the full history of calls made to a particular Cache method."""
    r = method.__self__._redis
    name = method.__qualname__
    count = int(r.get(name) or 0)
    inputs = r.lrange(name + ":inputs", 0, -1)
    outputs = r.lrange(name + ":outputs", 0, -1)
    print("{} was called {} times:".format(name, count))
    for inp, out in zip(inputs, outputs):
        print("{}(*{}) -> {}".format(name, inp.decode("utf-8"), out.decode("utf-8")))