// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document imports
import property from "./documents/property"

// object imports
import feature from "./objects/feature";
import video from "./objects/video"


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    property,
    feature,
    video,
  ]),
})
