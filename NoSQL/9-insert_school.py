#!/usr/bin/env python3
'''List all documents in collection'''


def insert_school(mongo_collection, **kwargs):
    '''Insert'''
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
