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
 * An attribute within a key, the attribute property is being deprecated.
 */
export interface KeyAttribute {
  /**
   * The position of the attribute. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "position"?: number;
  "shapeField"?: model.ShapeField;
  "attribute"?: model.ShapeField;
}

export namespace KeyAttribute {
  export function getJsonObj(obj: KeyAttribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeField": obj.shapeField ? model.ShapeField.getJsonObj(obj.shapeField) : undefined,
        "attribute": obj.attribute ? model.ShapeField.getJsonObj(obj.attribute) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KeyAttribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeField": obj.shapeField
          ? model.ShapeField.getDeserializedJsonObj(obj.shapeField)
          : undefined,
        "attribute": obj.attribute
          ? model.ShapeField.getDeserializedJsonObj(obj.attribute)
          : undefined
      }
    };

    return jsonObj;
  }
}
