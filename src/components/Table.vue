<script setup>
const columns = [
    { name: "Column name" },
    { name: "Data type" },
    { name: "Source table" },
    { name: "Source column" },
    { name: "null" },
    { name: "identity" },
    { name: "Attribute" },
    { name: "Order" },
    { name: "Column Description" }
]

const table = {
    "source_system": "WideWorldImporters",
    "schema": "Application",
    "table": "Countries",
    "columns": [
        {
            "name": "CountryID",
            "group": "",
            "attribute": "",
            "default": "(NEXT VALUE FOR [Sequences].[CountryID])",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": true,
            "types": [
                {
                    "data_type": "int"
                }
            ]
        },
        {
            "name": "CountryName",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "nvarchar",
                    "max_length": "60"
                }
            ]
        },
        {
            "name": "FormalName",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "nvarchar",
                    "max_length": "60"
                }
            ]
        },
        {
            "name": "IsoAlpha3Code",
            "group": "",
            "attribute": "",
            "is_nullable": true,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "nvarchar",
                    "max_length": "3"
                }
            ]
        },
        {
            "name": "IsoNumericCode",
            "group": "",
            "attribute": "",
            "is_nullable": true,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "int"
                }
            ]
        },
        {
            "name": "CountryType",
            "group": "",
            "attribute": "",
            "is_nullable": true,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "nvarchar",
                    "max_length": "20"
                }
            ]
        },
        {
            "name": "LatestRecordedPopulation",
            "group": "",
            "attribute": "",
            "is_nullable": true,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "bigint"
                }
            ]
        },
        {
            "name": "Continent",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "nvarchar",
                    "max_length": "30"
                }
            ]
        },
        {
            "name": "Region",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "nvarchar",
                    "max_length": "30"
                }
            ]
        },
        {
            "name": "Subregion",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "nvarchar",
                    "max_length": "30"
                }
            ]
        },
        {
            "name": "Border",
            "group": "",
            "attribute": "",
            "is_nullable": true,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "geography"
                }
            ]
        },
        {
            "name": "LastEditedBy",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "int"
                }
            ]
        },
        {
            "name": "ValidFrom",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "datetime2"
                }
            ]
        },
        {
            "name": "ValidTo",
            "group": "",
            "attribute": "",
            "is_nullable": false,
            "is_identity": false,
            "is_primary_key": false,
            "types": [
                {
                    "data_type": "datetime2"
                }
            ]
        }
    ]

}

</script>

<template>

    <div class="w-full max-h-fit  shadow-md sm:rounded-lg">
        <div class=" py-1 px-2 text-xs bg-gray-900 text-gray-200 select-none">
            {{ table.schema }}.{{ table.table }}.Columns - TODO: need to change scrolling to keep column titles on top
        </div>
        <table class="w-full  table-auto text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="w-full sticky top-0 text-xs text-gray-700 capitalized  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="select-none">
                    <th v-for="column, idx in columns" :key="idx" scope="col" class="px-2 py-2  truncate  ">
                        {{ column.name }}
                    </th>
                </tr>
            </thead>
            <tbody class="w-full overflow-y-scroll" style="height: 50vh;">
                <tr v-for="(column, idx) in table.columns" :key="column.name"
                    class="text-xs h-6 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 select-none">

                    <td scope="row" class="px-2 font-normal dark:text-white whitespace-nowrap">
                        {{ column.name }}
                    </td>

                    <td class="px-2">
                        <span v-for="type, idx in column.types" :key="idx">
                            <p class="flex whitespace-nowrap">
                                <span>
                                    {{ type.data_type }}
                                </span>
                                <span v-if="type.max_length">
                                    ({{ type.max_length }})
                                </span>
                            </p>
                        </span>
                    </td>

                    <td class="px-2">
                        {{ table.table }}
                    </td>

                    <td class="px-2">
                        {{ column.name }}
                    </td>

                    <td class="px-2">
                        <input type="checkbox" :checked="column.is_nullable" name="" id="">
                    </td>

                    <td class="px-2">
                        <input type="checkbox" :checked="column.is_primary_key" name="" id="">
                    </td>

                    <td class="px-2">
                        {{ column.attribute }}
                    </td>

                    <td class="px-2">
                        {{ (idx + 1) * 10 }}
                    </td>

                    <td class="px-2 truncate">
                        s
                    </td>
                </tr>
            </tbody>

        </table>
    </div>


</template>