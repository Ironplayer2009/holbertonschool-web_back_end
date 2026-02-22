#!/usr/bin/env python3
"""MESSIIIIIIIIIII"""
from typing import Union


def to_kv(k: str, v:Union[int, float]) -> tuple[str, float]:
    """THis is about the annotation"""
    v_square = v ** 2
    return (k, v_square)
