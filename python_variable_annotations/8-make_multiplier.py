#!/usr/bin/env python3
'''MESSSIIIII'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """DEF YU"""

    def multiply(x: int) -> int:
        return x * multiplier

    return multiply
