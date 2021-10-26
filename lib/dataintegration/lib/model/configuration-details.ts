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
 * A key map. If provided, key is replaced with generated key.
 */
export interface ConfigurationDetails {
  "dataAsset"?:
    | model.DataAssetFromJdbc
    | model.DataAssetFromOracleDetails
    | model.DataAssetFromAdwcDetails
    | model.DataAssetFromAmazonS3
    | model.DataAssetFromObjectStorageDetails
    | model.DataAssetFromFusionApp
    | model.DataAssetFromAtpDetails
    | model.DataAssetFromMySQL;
  "connection"?:
    | model.ConnectionFromObjectStorage
    | model.ConnectionFromAdwc
    | model.ConnectionFromAtp
    | model.ConnectionFromOracle
    | model.ConnectionFromAmazonS3
    | model.ConnectionFromMySQL
    | model.ConnectionFromJdbc
    | model.ConnectionFromBICC;
  /**
   * The compartment ID of the object store.
   */
  "compartmentId"?: string;
  "schema"?: model.Schema;
}

export namespace ConfigurationDetails {
  export function getJsonObj(obj: ConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataAsset": obj.dataAsset ? model.DataAsset.getJsonObj(obj.dataAsset) : undefined,
        "connection": obj.connection ? model.Connection.getJsonObj(obj.connection) : undefined,

        "schema": obj.schema ? model.Schema.getJsonObj(obj.schema) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataAsset": obj.dataAsset
          ? model.DataAsset.getDeserializedJsonObj(obj.dataAsset)
          : undefined,
        "connection": obj.connection
          ? model.Connection.getDeserializedJsonObj(obj.connection)
          : undefined,

        "schema": obj.schema ? model.Schema.getDeserializedJsonObj(obj.schema) : undefined
      }
    };

    return jsonObj;
  }
}
