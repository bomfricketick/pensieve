# Pensieve ![example workflow](https://github.com/bomfricketick/pensieve/actions/workflows/node.js.yml/badge.svg)

This is a personal project to explore and learn Vue. 
Main goal is to build some web app that can connect to a database, read and import meta data to draw it's data model. 
Add more meta data to generate a logical raw data vault model. Use the logical model to create business layer on top of the raw vault

```mermaid
flowchart LR
  subgraph pensieve [ ]
    direction TB 
    subgraph meta [ ]
        direction LR
        s1{{visualise the source data model}} --> s2(tag meta data)
        s1 --> s3(add fk const to model)
        s1 --> s4(Additional attrs)
    end
    subgraph vault [ ]
        direction TB
        a1{{raw vault is generated with tables to load it}} --> a(load)
        a1 --> b(stage)
        a1 --> c(vault)
    end
    subgraph business [ ]
        direction TB
        b1{{optional business layer}} --> b2(stage)
        b1 --> b3(bdv tbls)
    end
    subgraph analysis [ ]
        direction TB
        i1{{analysis layer - kimball}} --> i2(dim)
        i1 --> i3(fact)
        i1 --> i4(dim)
    end
  end
  A([source]) --> pensieve --> B([target])
  meta <-->|Edit metadata to update vault model and all it's dependencies| a1
  b3 -.->|metadata - define joins and columns to new entities| i1
  c -.->|metadata - define joins and columns to new entities| b1
  c -.-> |metadata - define joins and columns to new entities| i1 


```


Scope:  
- [x] Possibility to work on different projects
- [ ] Define project environment
- [ ] Store secrets in environment
- [ ] Define connection to source
- [ ] Connect to source and browse it's content
- [ ] Load meta data into metadata db
- [ ] Add Data Vault attributes to tables and columns
- [ ] Create logical Data Vault model based on tags
- [ ] Create Business Vault and/or Information Marts on top of Raw Vault
- [ ] Create Error Marts to track faulty data from source systems 
- [ ] Define connection to taget platform 
- [ ] Create all physical tables, views and stored procedures for target platform 
- [ ] Choose how to execute and schedule jobs to load target platform with data
- [ ] Display lineage source -> target  
- [ ] Document everything  





```mermaid
flowchart LR
    A([Web browser])-->|HTML, CSS, Javascript, etc| B([Amplify])
    A-->|Authenticate| C([Cognito]) 
    A-->|Dynamic API Calls over https| D([API Gateway])
    D-->E([Lambda])
    E-->F([DynamoDB])
```


We'll use Vue 3 `<script setup>` SFCs as much as possible, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.  


## Recommended IDE Setup  

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


