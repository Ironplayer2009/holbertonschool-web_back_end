#!/usr/bin/env python3
"""THIS IS ANKARA MESSI, ANKARA NARIMAN"""
import asyncio
from typing import Callable, List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int = 4, max_delay: int = 5) -> List[float]:
    """This function is about async loops"""
    result: List[float] = []
    tasks = [wait_random(max_delay) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        yielded_result: float = await task
        result.append(yielded_result)

    return result
