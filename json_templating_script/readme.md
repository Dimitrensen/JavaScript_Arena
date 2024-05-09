# to do 


I have 2 files named base.json and extension.json 

in the base.json I have a json object 

```json
{
  "a":"banana",
  "b":{
    "c":"pineapple"
  },
  "d":[1,2,3,4,5,6]
}
```

in the second file we have the bellow json

```json
{
  "store":"234455",
  "data":{
    "point":"{{a}}"
  },
  "price":"{{d}}",
  "location":{
    "toc":"{{b.c}}"
  },
  "target":{
    "f":"{{b}}"
  }
}
```


the final result should be 

```json
{
  "store":"234455",
  "data":{
    "point":"banana"
  },
  "price":[1,2,3,4,5,6],
  "location":{
    "toc":"pineapple"
  },
  "target":{
    "f":{
      "c":"pineapple"
    }
  }
}
```

json-template.sh base.json extension.json result.json



tips:

 you can use `jq` for fast access of the data