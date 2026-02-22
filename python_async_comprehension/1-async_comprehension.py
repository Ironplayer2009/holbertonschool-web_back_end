#!/usr/bin/env python3
"""THIS IS ANKARA MESSI, ANKARA NARIMAN"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """This is brief version guys"""
    return [i async for i in async_generator()]
