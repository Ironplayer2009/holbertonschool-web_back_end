#!/usr/bin/env python3
"""THis is async, so let do it guys, python is awesome , c is love"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """THi is function idiot"""
    for i in range(10):
        await asyncio.sleep(1)
        number: float = random.uniform(0, 10)
        yield number
