/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Information about creating an Object Storage log location for a DR Protection Group.
 */
export interface CreateObjectStorageLogLocationDetails {
  /**
    * The namespace in Object Storage (Note - this is usually the tenancy name).
* <p>
Example: `myocitenancy`
* 
    */
  "namespace": string;
  /**
    * The bucket name inside the Object Storage namespace.
* <p>
Example: `operation_logs`
* 
    */
  "bucket": string;
}

export namespace CreateObjectStorageLogLocationDetails {
  export function getJsonObj(obj: CreateObjectStorageLogLocationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateObjectStorageLogLocationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
