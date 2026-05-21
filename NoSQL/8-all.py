#!/usr/bin/env python3
'''List all documents in collection'''


def list_all(mongo_collection):
    '''Function to list documents'''
    documents = list(mongo_collection.find())
    if documents:
        return documents
    return []
