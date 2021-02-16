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
 * The information about a field map.
 */
export interface DirectFieldMap extends model.FieldMap {
  /**
   * The object key.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  "configValues"?: model.ConfigValues;
  /**
   * Reference to a typed object.
   */
  "sourceTypedObject"?: string;
  /**
   * Reference to a typed object.
   */
  "targetTypedObject"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;

  "modelType": string;
}

export namespace DirectFieldMap {
  export function getJsonObj(obj: DirectFieldMap, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FieldMap.getJsonObj(obj) as DirectFieldMap)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "DIRECT_FIELD_MAP";
}
