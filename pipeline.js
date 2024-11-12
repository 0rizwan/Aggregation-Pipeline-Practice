
// Q1 - To find out how many users are active and their count
[
    {
        $match: {
            isActive: true
        }
    },
    {
        $count: "Active-Users"
    }
]

// Q2 - What is average age of all users based on gender
[
    {
        $group: {
            _id: "$gender",
            averageAge: {
                $avg: "$age"
            }
        }
    }
]

// Q3 - List the top 5 most common fruits among the users
[
    {
        $group: {
            _id: "$favoriteFruit",
            count: {
                $sum: 1,
            },
        },
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 5
    }
]

// Q4 - Find the total numbers of females and males
[
    {
        $group: {
            _id: "$gender",
            total: {
                $sum: 1
            }
        }
    }
]

// Q5 - Which country has the highest number of registered users?
[
    {
        $group: {
            _id: "$company.location.country",
            registeredUsers: {
                $sum: 1,
            },
        },
    },
    {
        $sort: {
            registeredUsers: -1,
        },
    },
    {
        $limit: 1
    }
]

// Q6 - List all unique eye colors present in the collection.
[
    {
        $group: {
            _id: "$eyeColor"
        }
    }
]

// Q7 - What is the average number of tags per user? 
[
    {
        $group: {
            _id: null,
            averageTags: {
                $avg: {
                    $size: { $ifNull: ["$tags", []] }
                }
            }
        }
    }
]

// Q8 - How many users have "enim" as one of their tags?
[
    {
        $match: {
            tags: "enim",
        }
    },
    {
        $count: 'usersWithTags'
    }
]

// Q9 - What are the names and age of users who are inactive and have "id" as their tags?
[
    {
        $match: {
            tags: "id",
            isActive: false
        }
    },
    {
        $project: {
            name: 1,
            age: 1
        }
    }
]

// Q10 - How many users have phone number starting with "+1 (940)"?
[
    {
        $match: {
            "company.phone": /^\+1 \(940\)/
        }
    },
    {
        $count: 'usersWithSpecialNumber'
    }
]

// Q11 - Who has registered most recently?
[
    {
        $sort: {
            registered: -1
        }
    },
    {
        $limit: 5
    }
]

// Q12 - Categorize users by thier favorite fruit.
[
    // Making users array with same favorite fruits
    {
        $group: {
            _id: "$favoriteFruit",
            users: { $push: "$name" },
            totalUsers: { $sum: 1 },
        },
    },
    // It sorts the favorite fruit - apple -> banana -> strawberry
    {
        $sort: {
            _id: 1
        }
    },
    // It sorts the users array alphabetically
    {
        $project: {
            users: { $sortArray: { input: "$users", sortBy: 1 } },
            totalUsers: 1
        }
    }
]

// Q13 - How many users have 'ad' as a second tag in their list of tags
[
    {
        $match: {
            "tags.1": "ad"
        }
    },
    {
        $count: 'secondTagAd'
    }
]

// Q14 - Find user who have both "enim" and "id" as their tags.
[
    // Both are same
    // 1
    {
        $match: {
            $and: [{ tags: "enim" }, { tags: "id" }]
        }
    },
    // 2
    {
        $match: {
            tags: {
                $all: ["enim", "id"]
            }
        }
    },
    {
        $count: 'usersWithBothTags'
    }
]

// Q15 - List all the companies located in "USA" with their corresponding user count
[
    {
        $match: {
            "company.location.country": "USA",
        },
    },
    {
        $group: {
            _id: "$company.title",
            userCount: {
                $sum: 1,
            },
        },
    }
]

// Look up example
[
    {
        $lookup: {
            from: "authors",
            localField: "author_id",
            foreignField: "_id",
            as: "author",
        },
    },
    {
        $addFields: {
            author: {
                $first: "$author"
            }
        }
    },
    {
        $project: {
            title: 1,
            genre: 1,
            author: 1
        }
    }
]

