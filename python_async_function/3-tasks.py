#!/usr/bin/env python3
"""BF4 is awesome, but COD wil be always the best"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """I will try thi time do that max brief"""
    return asyncio.create_task(wait_random(max_delay))
