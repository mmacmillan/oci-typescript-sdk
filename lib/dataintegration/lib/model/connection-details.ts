/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The connection details for a data asset.
 */
export interface ConnectionDetails {
  /**
   * Generated key that can be used in API calls to identify connection. On scenarios where reference to the connection is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * User-defined description for the connection.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "primarySchema"?: model.Schema;
  /**
   * The properties for the connection.
   */
  "connectionProperties"?: Array<model.ConnectionProperty>;
  /**
   * The default property for the connection.
   */
  "isDefault"?: boolean;
  "metadata"?: model.ObjectMetadata;

  "modelType": string;
}

export namespace ConnectionDetails {
  export function getJsonObj(obj: ConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "primarySchema": obj.primarySchema ? model.Schema.getJsonObj(obj.primarySchema) : undefined,
        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_CONNECTION":
          return model.ConnectionFromJdbcDetails.getJsonObj(
            <model.ConnectionFromJdbcDetails>(<object>jsonObj),
            true
          );
        case "REST_NO_AUTH_CONNECTION":
          return model.ConnectionFromRestNoAuthDetails.getJsonObj(
            <model.ConnectionFromRestNoAuthDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.ConnectionFromAmazonS3Details.getJsonObj(
            <model.ConnectionFromAmazonS3Details>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.ConnectionFromObjectStorageDetails.getJsonObj(
            <model.ConnectionFromObjectStorageDetails>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.ConnectionFromBICCDetails.getJsonObj(
            <model.ConnectionFromBICCDetails>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.ConnectionFromMySQLDetails.getJsonObj(
            <model.ConnectionFromMySQLDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.ConnectionFromAdwcDetails.getJsonObj(
            <model.ConnectionFromAdwcDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.ConnectionFromAtpDetails.getJsonObj(
            <model.ConnectionFromAtpDetails>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.ConnectionFromOracleDetails.getJsonObj(
            <model.ConnectionFromOracleDetails>(<object>jsonObj),
            true
          );
        case "LAKE_CONNECTION":
          return model.ConnectionFromLakeDetails.getJsonObj(
            <model.ConnectionFromLakeDetails>(<object>jsonObj),
            true
          );
        case "REST_BASIC_AUTH_CONNECTION":
          return model.ConnectionFromRestBasicAuthDetails.getJsonObj(
            <model.ConnectionFromRestBasicAuthDetails>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.ConnectionFromBipDetails.getJsonObj(
            <model.ConnectionFromBipDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "primarySchema": obj.primarySchema
          ? model.Schema.getDeserializedJsonObj(obj.primarySchema)
          : undefined,
        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getDeserializedJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_CONNECTION":
          return model.ConnectionFromJdbcDetails.getDeserializedJsonObj(
            <model.ConnectionFromJdbcDetails>(<object>jsonObj),
            true
          );
        case "REST_NO_AUTH_CONNECTION":
          return model.ConnectionFromRestNoAuthDetails.getDeserializedJsonObj(
            <model.ConnectionFromRestNoAuthDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.ConnectionFromAmazonS3Details.getDeserializedJsonObj(
            <model.ConnectionFromAmazonS3Details>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.ConnectionFromObjectStorageDetails.getDeserializedJsonObj(
            <model.ConnectionFromObjectStorageDetails>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.ConnectionFromBICCDetails.getDeserializedJsonObj(
            <model.ConnectionFromBICCDetails>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.ConnectionFromMySQLDetails.getDeserializedJsonObj(
            <model.ConnectionFromMySQLDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.ConnectionFromAdwcDetails.getDeserializedJsonObj(
            <model.ConnectionFromAdwcDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.ConnectionFromAtpDetails.getDeserializedJsonObj(
            <model.ConnectionFromAtpDetails>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.ConnectionFromOracleDetails.getDeserializedJsonObj(
            <model.ConnectionFromOracleDetails>(<object>jsonObj),
            true
          );
        case "LAKE_CONNECTION":
          return model.ConnectionFromLakeDetails.getDeserializedJsonObj(
            <model.ConnectionFromLakeDetails>(<object>jsonObj),
            true
          );
        case "REST_BASIC_AUTH_CONNECTION":
          return model.ConnectionFromRestBasicAuthDetails.getDeserializedJsonObj(
            <model.ConnectionFromRestBasicAuthDetails>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.ConnectionFromBipDetails.getDeserializedJsonObj(
            <model.ConnectionFromBipDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
