#!/usr/bin/env python3
"""THis is async, so let do it guys, python is awesome , c is love"""
import asyncio
import random


async def wait_random(max_delay: int = 5) -> float:
    """This is async func"""
    result: float = random.uniform(0, max_delay)
    await asyncio.sleep(result)
    return result
