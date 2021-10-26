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
 * Details for the MYSQL data asset type.
 */
export interface DataAssetFromAmazonS3 extends model.DataAsset {
  /**
   * The region for Amazon s3
   */
  "region"?: string;
  "defaultConnection"?: model.ConnectionSummaryFromAmazonS3;

  "modelType": string;
}

export namespace DataAssetFromAmazonS3 {
  export function getJsonObj(obj: DataAssetFromAmazonS3, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DataAsset.getJsonObj(obj) as DataAssetFromAmazonS3)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionSummaryFromAmazonS3.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "AMAZON_S3_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: DataAssetFromAmazonS3,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataAsset.getDeserializedJsonObj(obj) as DataAssetFromAmazonS3)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.ConnectionSummaryFromAmazonS3.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
