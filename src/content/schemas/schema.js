// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document imports
import property from "./documents/property"
import agent from "./documents/agent"
import admin from "./documents/admin";
import blog from "./documents/blog";
import faq from "./documents/faq";
import service from "./documents/service";
import collection from "./documents/collection";
import testimonial from "./documents/testimonial";
import plan from "./documents/plan";
import blogCategory from "./documents/blogCategory";
import agency from "./documents/agency";
import city from "./documents/city";
import message from "./documents/message";

// object imports
import propertyFeature from "./objects/propertyFeature";
import video from "./objects/video";
import socialMedia from "./objects/socialMedia";
import planFeature from "./objects/planFeature";
import comment from "./objects/comment"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    admin,
    agent,
    agency,
    property,
    blog,
    blogCategory,
    collection,
    service,
    message,
    testimonial,
    plan,
    faq,
    city,
    propertyFeature,
    planFeature,
    socialMedia,
    video,
    comment
  ]),
})
