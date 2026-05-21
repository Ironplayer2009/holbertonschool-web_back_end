#!/usr/bin/env python3
'''List all documents in collection'''


def update_topics(mongo_collection, name, topics):
    '''Update'''
    result = mongo_collection.update_many({'name': name}, {'$set': {'topics': topics}})
    return result