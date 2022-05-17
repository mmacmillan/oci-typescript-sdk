/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The abstract write attribute.
 */
export interface AbstractWriteAttribute {
  "modelType": string;
}

export namespace AbstractWriteAttribute {
  export function getJsonObj(obj: AbstractWriteAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLEADWCWRITEATTRIBUTE":
          return model.OracleAdwcWriteAttribute.getJsonObj(
            <model.OracleAdwcWriteAttribute>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_WRITE_ATTRIBUTE":
          return model.OracleAtpWriteAttributes.getJsonObj(
            <model.OracleAtpWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLEWRITEATTRIBUTE":
          return model.OracleWriteAttribute.getJsonObj(
            <model.OracleWriteAttribute>(<object>jsonObj),
            true
          );
        case "ORACLE_WRITE_ATTRIBUTE":
          return model.OracleWriteAttributes.getJsonObj(
            <model.OracleWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLEATPWRITEATTRIBUTE":
          return model.OracleAtpWriteAttribute.getJsonObj(
            <model.OracleAtpWriteAttribute>(<object>jsonObj),
            true
          );
        case "OBJECTSTORAGEWRITEATTRIBUTE":
          return model.ObjectStorageWriteAttribute.getJsonObj(
            <model.ObjectStorageWriteAttribute>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_WRITE_ATTRIBUTE":
          return model.OracleAdwcWriteAttributes.getJsonObj(
            <model.OracleAdwcWriteAttributes>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_WRITE_ATTRIBUTE":
          return model.ObjectStorageWriteAttributes.getJsonObj(
            <model.ObjectStorageWriteAttributes>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AbstractWriteAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLEADWCWRITEATTRIBUTE":
          return model.OracleAdwcWriteAttribute.getDeserializedJsonObj(
            <model.OracleAdwcWriteAttribute>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_WRITE_ATTRIBUTE":
          return model.OracleAtpWriteAttributes.getDeserializedJsonObj(
            <model.OracleAtpWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLEWRITEATTRIBUTE":
          return model.OracleWriteAttribute.getDeserializedJsonObj(
            <model.OracleWriteAttribute>(<object>jsonObj),
            true
          );
        case "ORACLE_WRITE_ATTRIBUTE":
          return model.OracleWriteAttributes.getDeserializedJsonObj(
            <model.OracleWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLEATPWRITEATTRIBUTE":
          return model.OracleAtpWriteAttribute.getDeserializedJsonObj(
            <model.OracleAtpWriteAttribute>(<object>jsonObj),
            true
          );
        case "OBJECTSTORAGEWRITEATTRIBUTE":
          return model.ObjectStorageWriteAttribute.getDeserializedJsonObj(
            <model.ObjectStorageWriteAttribute>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_WRITE_ATTRIBUTE":
          return model.OracleAdwcWriteAttributes.getDeserializedJsonObj(
            <model.OracleAdwcWriteAttributes>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_WRITE_ATTRIBUTE":
          return model.ObjectStorageWriteAttributes.getDeserializedJsonObj(
            <model.ObjectStorageWriteAttributes>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
