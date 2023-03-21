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
 * Represents the metadata of a Microsoft SQL Server Connection.
 *
 */
export interface MicrosoftSqlserverConnection extends model.Connection {
  /**
   * The Microsoft SQL Server technology type.
   */
  "technologyType": MicrosoftSqlserverConnection.TechnologyType;
  /**
   * The username Oracle GoldenGate uses to connect to the Microsoft SQL Server.
   * This username must already exist and be available by the Microsoft SQL Server to be connected to.
   *
   */
  "username": string;
  /**
   * The name or address of a host.
   *
   */
  "host": string;
  /**
   * The port of an endpoint usually specified for a connection.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * The name of the database.
   *
   */
  "databaseName": string;
  /**
   * An array of name-value pair attribute entries.
   * Used as additional parameters in connection string.
   *
   */
  "additionalAttributes"?: Array<model.NameValuePair>;
  /**
   * Security Protocol for Microsoft SQL Server.
   */
  "securityProtocol": MicrosoftSqlserverConnection.SecurityProtocol;
  /**
   * Database Certificate - The base64 encoded content of pem file
   * containing the server public key (for 1-way SSL).
   *
   */
  "sslCa"?: string;
  /**
   * If set to true, the driver validates the certificate that is sent by the database server.
   *
   */
  "shouldValidateServerCertificate"?: boolean;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;

  "connectionType": string;
}

export namespace MicrosoftSqlserverConnection {
  export enum TechnologyType {
    AmazonRdsSqlserver = "AMAZON_RDS_SQLSERVER",
    AzureSqlserverManagedInstance = "AZURE_SQLSERVER_MANAGED_INSTANCE",
    AzureSqlserverNonManagedInstance = "AZURE_SQLSERVER_NON_MANAGED_INSTANCE",
    MicrosoftSqlserver = "MICROSOFT_SQLSERVER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SecurityProtocol {
    Plain = "PLAIN",
    Tls = "TLS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MicrosoftSqlserverConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getJsonObj(obj) as MicrosoftSqlserverConnection)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "MICROSOFT_SQLSERVER";
  export function getDeserializedJsonObj(
    obj: MicrosoftSqlserverConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as MicrosoftSqlserverConnection)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
