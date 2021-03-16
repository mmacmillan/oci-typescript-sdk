/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary information for a work request.
 */
export interface WorkRequestSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request.
   */
  "id": string;
  /**
   * The type of work the work request is doing.
   */
  "operationType": model.WorkRequestOperationType;
  /**
   * The current status of the work request.
   */
  "status": model.WorkRequestStatus;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request's compartment.
   */
  "compartmentId": string;
  /**
   * Percentage of the request completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The resources affected by this work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * The date and time the work request was accepted in the timestamp format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request was started in the timestamp format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request was finished in the timestamp format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
