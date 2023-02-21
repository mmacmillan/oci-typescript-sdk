/**
 * Anomaly Detection API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * A collection of anomaly jobs. Each item is a DetectAnomalyJob summary object.
 */
export interface DetectAnomalyJobCollection {
  /**
   * List of Anomaly Detection jobs.
   */
  "items": Array<model.DetectAnomalyJobSummary>;
}

export namespace DetectAnomalyJobCollection {
  export function getJsonObj(obj: DetectAnomalyJobCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DetectAnomalyJobSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DetectAnomalyJobCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DetectAnomalyJobSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
