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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Options for failover execution.
 */
export interface FailoverExecutionOptionDetails extends model.DrPlanExecutionOptionDetails {
  /**
    * A flag indicating whether prechecks should be executed before the plan execution.
* <p>
Example: `true`
* 
    */
  "arePrechecksEnabled"?: boolean;
  /**
    * A flag indicating whether warnings should be ignored during the failover.
* <p>
Example: `false`
* 
    */
  "areWarningsIgnored"?: boolean;

  "planExecutionType": string;
}

export namespace FailoverExecutionOptionDetails {
  export function getJsonObj(
    obj: FailoverExecutionOptionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanExecutionOptionDetails.getJsonObj(obj) as FailoverExecutionOptionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const planExecutionType = "FAILOVER";
  export function getDeserializedJsonObj(
    obj: FailoverExecutionOptionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrPlanExecutionOptionDetails.getDeserializedJsonObj(
            obj
          ) as FailoverExecutionOptionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
