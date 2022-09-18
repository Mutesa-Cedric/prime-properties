// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document imports
import property from "./documents/property"
import agent from "./documents/agent"
// object imports
import feature from "./objects/feature";
import video from "./objects/video";
import socialMedia from "./objects/socialMedia"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    property,
    agent,
    feature,
    socialMedia,
    video,
  ]),
})
