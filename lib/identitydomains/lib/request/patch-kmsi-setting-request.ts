/**
 *
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/identitydomains/PatchKmsiSetting.ts.html |here} to see how to use PatchKmsiSettingRequest.
 */
export interface PatchKmsiSettingRequest extends common.BaseRequest {
  /**
   * ID of the resource
   */
  "kmsiSettingId": string;
  /**
   * The Authorization field value consists of credentials containing the authentication information of the user agent for the realm of the resource being requested.
   */
  "authorization"?: string;
  /**
   * An endpoint-specific schema version number to use in the Request. Allowed version values are Earliest Version or Latest Version as specified in each REST API endpoint description, or any sequential number inbetween. All schema attributes/body parameters are a part of version 1. After version 1, any attributes added or deprecated will be tagged with the version that they were added to or deprecated in. If no version is provided, the latest schema version is returned.
   */
  "resourceTypeSchemaVersion"?: string;
  /**
   * A comma-delimited string that specifies the names of resource attributes that should be returned in the response. By default, a response that contains resource attributes contains only attributes that are defined in the schema for that resource type as returned=always or returned=default. An attribute that is defined as returned=request is returned in a response only if the request specifies its name in the value of this query parameter. If a request specifies this query parameter, the response contains the attributes that this query parameter specifies, as well as any attribute that is defined as returned=always.
   */
  "attributes"?: string;
  /**
   * A multi-valued list of strings indicating the return type of attribute definition. The specified set of attributes can be fetched by the return type of the attribute. One or more values can be given together to fetch more than one group of attributes. If 'attributes' query parameter is also available, union of the two is fetched. Valid values - all, always, never, request, default. Values are case-insensitive.
   */
  "attributeSets"?: Array<model.AttributeSets>;
  /**
 * Update the KmsiSettings with SCIM Patch schema.
* <p>
Before you specify an attribute-value in a request to update a resource, please check the **'mutability'** property of that attribute in the resource-type schema below. Clicking on an attribute-row will expand that row to show the **SCIM++ Properties** of that attribute.
*  - Your request to create, update or replace a resource may specify in its payload a value for any attribute that is defined as *mutability:readWrite* or *mutability:writeOnly* or *mutability:immutable*:
*  - The SCIM APIs to create a resource will ignore silently any value that you specify for an attribute that is defined as *mutability:readOnly*.
*  - The SCIM APIs to update or replace a resource will fail with an error 400 Bad Request if you specify a value for an attribute that is defined as *mutability:readOnly*.
*  - Similarly, the SCIM APIs to update or replace a resource will fail with an error 400 Bad Request if you specify any value for an attribute that is defined as *mutability:immutable* and that already has a value in the specified resource.
* <p>
Also, before you use the query-parameter attributes to request specific attributes, please check the **'returned'** property of that attribute in the resource-type schema below:
*  - Your request to read a resource (or to search a resource-type) can specify as the value of attributes any attributes that are defined as *returned:default* or *returned:request* or *returned:always*:
*  - If you request a specific set of attributes, the SCIM APIs to read a resource (or to search a resource-type) will return in each resource the set of attributes that you requested, as well as any attribute that is defined as *returned:always*.
*  - If you do not request a specific set of attributes, the SCIM APIs to read a resource (or to search a resource-type) will return in each resource the the set of attributes defined as *returned:default*, as well as any attribute that is defined as *returned:always*.
*  - The SCIM APIs to read a resource (or to search a resource-type) will ignore silently any request to return an attribute that is defined as *returned:never*.
* 
 */
  "patchOp"?: model.PatchOp;
  /**
   * Used to make the request conditional on an ETag
   */
  "ifMatch"?: string;
  /**
   * A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours.
   */
  "opcRetryToken"?: string;
}
