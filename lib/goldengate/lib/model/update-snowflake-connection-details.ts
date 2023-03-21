/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information to update a Snowflake Connection.
 *
 */
export interface UpdateSnowflakeConnectionDetails extends model.UpdateConnectionDetails {
  /**
   * JDBC connection URL.
   * e.g.: 'jdbc:snowflake://<account_name>.snowflakecomputing.com/?warehouse=<warehouse-name>&db=<db-name>'
   *
   */
  "connectionUrl"?: string;
  /**
   * Used authentication mechanism to access Snowflake.
   *
   */
  "authenticationType"?: string;
  /**
   * The username Oracle GoldenGate uses to connect to Snowflake.
   * This username must already exist and be available by Snowflake platform to be connected to.
   *
   */
  "username"?: string;
  /**
   * The password Oracle GoldenGate uses to connect to Snowflake platform.
   *
   */
  "password"?: string;
  /**
   * The base64 encoded content of private key file in PEM format.
   *
   */
  "privateKeyFile"?: string;
  /**
   * Password if the private key file is encrypted.
   *
   */
  "privateKeyPassphrase"?: string;

  "connectionType": string;
}

export namespace UpdateSnowflakeConnectionDetails {
  export function getJsonObj(
    obj: UpdateSnowflakeConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateSnowflakeConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "SNOWFLAKE";
  export function getDeserializedJsonObj(
    obj: UpdateSnowflakeConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateSnowflakeConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
