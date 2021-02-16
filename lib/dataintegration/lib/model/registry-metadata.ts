/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
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
 * Information about the object and its parent.
 */
export interface RegistryMetadata {
  /**
   * The owning object's key for this object.
   */
  "aggregatorKey"?: string;
  /**
   * Labels are keywords or labels that you can add to data assets, dataflows etc. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;
  /**
   * The registry version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "registryVersion"?: number;
  /**
   * The identifying key for the object.
   */
  "key"?: string;
  /**
   * Specifies whether this object is a favorite or not.
   */
  "isFavorite"?: boolean;
}

export namespace RegistryMetadata {
  export function getJsonObj(obj: RegistryMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
