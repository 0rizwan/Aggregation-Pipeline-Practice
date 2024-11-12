# MongoDB Aggregation Pipeline Practice

This repository contains practice exercises focused on mastering MongoDB's Aggregation Pipeline. The aggregation pipeline is a powerful framework for data aggregation, allowing for the transformation and analysis of documents within a MongoDB collection. Each exercise demonstrates the use of different pipeline stages and operators to accomplish specific data processing tasks.

## Table of Contents

- [Introduction](#introduction)
- [Aggregation Pipeline Stages](#aggregation-pipeline-stages)
- [Practice Queries](#practice-queries)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)

## Introduction

The MongoDB Aggregation Pipeline is a framework for transforming and aggregating data, making it easy to execute complex data queries. This repository includes solutions to various aggregation tasks, designed to enhance skills in data manipulation and extraction using MongoDB.

## Aggregation Pipeline Stages

The following MongoDB stages and operators are used across the exercises:

- **$match**: Filters documents to pass only those that match specified conditions.
- **$group**: Groups input documents by a specified key and performs operations on each group.
- **$sort**: Sorts documents by specified fields.
- **$project**: Shapes the documents by including, excluding, or adding new fields.
- **$count**: Counts documents in the pipeline.
- **$limit**: Limits the number of documents passed along.
- **$lookup**: Performs joins by pulling data from related collections.
- **$unwind**: Deconstructs an array field into multiple documents.
- **$addFields**: Adds new fields to documents.
- **$replaceRoot**: Replaces the top-level document structure.

## Practice Queries

The exercises include a variety of data processing tasks such as:
- Counting and filtering users by criteria (e.g., active users)
- Calculating averages based on groups (e.g., average age by gender)
- Sorting and limiting results (e.g., top 5 most common favorite fruits)
- Counting occurrences of specific conditions (e.g., users with specific tags or phone numbers)
- Aggregating nested data (e.g., counting users per country or company)

## Technologies Used

- **MongoDB**: NoSQL database where data is stored in flexible, JSON-like documents.
- **MongoDB Aggregation Framework**: The core tool used for these exercises.

## How to Use

To practice or test the aggregation queries in this repository:
1. Install MongoDB if not already installed.
2. Import sample data into your MongoDB collection.
3. Copy and run the aggregation queries in a MongoDB shell or client (such as MongoDB Compass).

Each query is standalone and can be tested individually by loading it into MongoDB and observing the output.

---

Happy practicing! MongoDB's aggregation framework is powerful, and with continued practice, it can become an invaluable tool for data analysis and manipulation.
