# Pensieve ![example workflow](https://github.com/bomfricketick/pensieve/actions/workflows/node.js.yml/badge.svg)

This is a personal project to explore and learn Vue. 
Main goal is to build some web app that can connect to a database, read and import meta data to draw the model.
Manipulate the meta data to generate a logical data vault than later can be materialisezed and genereate code to build and load it


Scope:  
- [x] Load data into warehouse is not in scope
- [ ] Connect to database (data warehouse)  
- [ ] Display all it's enteties in list view    
- [ ] Display and define relationships between tables
- [ ] Add Data Vault attributes to tables and columns
- [ ] Create logical Data Vault model based on tags
- [ ] Based on logical model, generate load, stage and dv tables
- [ ] Business keys referenced by fk's are pre-joined and included in stage tables
- [ ] Generate procedures to load tables


We'll use Vue 3 `<script setup>` SFCs as much as possible, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.



## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
