/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * The summary run progress details of a BuildRun.
 */
export interface BuildRunProgressSummary {
  /**
   * The time the the BuildRun is started. An RFC3339 formatted datetime string
   */
  "timeStarted"?: Date;
  /**
   * The time the BuildRun is finished. An RFC3339 formatted datetime string
   */
  "timeFinished"?: Date;
}

export namespace BuildRunProgressSummary {
  export function getJsonObj(obj: BuildRunProgressSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BuildRunProgressSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
