/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Frequency details model to set cron-based frequency
 */
export interface CustomFrequencyDetails extends model.AbstractFrequencyDetails {
  /**
   * This holds the complete cron expression for this schedule, for example, 10 0/5 * * * ? that fires every 5 minutes, at 10 seconds after the minute (i.e. 10:00:10 am, 10:05:10 am, etc.)
   */
  "customExpression"?: string;

  "modelType": string;
}

export namespace CustomFrequencyDetails {
  export function getJsonObj(obj: CustomFrequencyDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFrequencyDetails.getJsonObj(obj) as CustomFrequencyDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "CUSTOM";
  export function getDeserializedJsonObj(
    obj: CustomFrequencyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFrequencyDetails.getDeserializedJsonObj(obj) as CustomFrequencyDetails)),
      ...{}
    };

    return jsonObj;
  }
}
