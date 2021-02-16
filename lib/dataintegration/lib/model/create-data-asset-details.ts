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
 * Properties used in data asset update operations.
 */
export interface CreateDataAssetDetails {
  /**
   * Currently not used on data asset creation. Reserved for future.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name": string;
  /**
   * User-defined description of the data asset.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier": string;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  /**
   * Additional properties for the data asset.
   */
  "assetProperties"?: { [key: string]: string };
  "registryMetadata"?: model.RegistryMetadata;

  "modelType": string;
}

export namespace CreateDataAssetDetails {
  export function getJsonObj(obj: CreateDataAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_DATA_ASSET":
          return model.CreateDataAssetFromJdbc.getJsonObj(
            <model.CreateDataAssetFromJdbc>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.CreateDataAssetFromMySQL.getJsonObj(
            <model.CreateDataAssetFromMySQL>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.CreateDataAssetFromOracle.getJsonObj(
            <model.CreateDataAssetFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.CreateDataAssetFromAdwc.getJsonObj(
            <model.CreateDataAssetFromAdwc>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.CreateDataAssetFromAtp.getJsonObj(
            <model.CreateDataAssetFromAtp>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.CreateDataAssetFromObjectStorage.getJsonObj(
            <model.CreateDataAssetFromObjectStorage>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
