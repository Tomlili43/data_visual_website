export default {
    'GET /api/categoryDistribution': (_: Request, res: Response) => {
        const product = {
            "category_distribution":[
                {
                    "type": "Arts, Crafts & Sewing ",
                    "value": 269421
                },
                {
                    "type": "Automotive ",
                    "value": 1499869
                },
                {
                    "type": "Baby Products ",
                    "value": 127057
                },
                {
                    "type": "Beauty & Personal Care ",
                    "value": 354498
                },
                {
                    "type": "CDs & Vinyl ",
                    "value": 55375
                },
                {
                    "type": "Cell Phones & Accessories ",
                    "value": 64738
                },
                {
                    "type": "Clothing, Shoes & Jewelry ",
                    "value": 1193970
                },
                {
                    "type": "Electronics ",
                    "value": 274621
                },
                {
                    "type": "Grocery & Gourmet Food ",
                    "value": 93750
                },
                {
                    "type": "Health & Household ",
                    "value": 251823
                },
                {
                    "type": "Home & Kitchen ",
                    "value": 3074730
                },
                {
                    "type": "Industrial & Scientific ",
                    "value": 368117
                },
                {
                    "type": "No Category",
                    "value": 444058
                },
                {
                    "type": "Office Products ",
                    "value": 189233
                },
                {
                    "type": "Patio, Lawn & Garden ",
                    "value": 212527
                },
                {
                    "type": "Pet Supplies ",
                    "value": 205071
                },
                {
                    "type": "Sports & Outdoors ",
                    "value": 653457
                },
                {
                    "type": "Tools & Home Improvement ",
                    "value": 1179638
                },
                {
                    "type": "Toys & Games ",
                    "value": 490157
                },
                {
                    "type": "Video Games ",
                    "value": 60709
                }
            ],
            "message": "SUCCESS",
            "status": 200
        }
        res.send(product);
    },

    'GET /api/modifiedCount': (_: Request, res: Response) => {
        const product = {
            "modified_count":[
                {
                    "Date": "2023-03-13",
                    "count": 63931
                },
                {
                    "Date": "2023-03-14",
                    "count": 11496
                },
                {
                    "Date": "2023-04-12",
                    "count": 176
                },
                {
                    "Date": "2023-04-15",
                    "count": 2553
                },
                {
                    "Date": "2023-04-17",
                    "count": 3361
                },
                {
                    "Date": "2023-05-10",
                    "count": 526
                },
                {
                    "Date": "2023-05-18",
                    "count": 2490
                },
                {
                    "Date": "2023-05-20",
                    "count": 1675
                },
                {
                    "Date": "2023-05-27",
                    "count": 9542
                },
                {
                    "Date": "2023-06-03",
                    "count": 1074
                },
                {
                    "Date": "2023-06-04",
                    "count": 15708
                },
                {
                    "Date": "2023-06-10",
                    "count": 1646940
                },
                {
                    "Date": "2023-06-11",
                    "count": 4734789
                }
            ],
            "message": "SUCCESS",
            "status": 200
        }
        res.send(product);
    },
};