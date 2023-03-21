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
 * Summary of the deployment wallets operations.
 *
 */
export interface DeploymentWalletsOperationSummary {
  /**
   * The UUID of the wallet operation performed by the customer.
   * If provided, this will reference a key which the customer can use to query or search a particular wallet operation
   *
   */
  "walletOperationId": string;
  /**
   * The OCID of the customer's GoldenGate Service Secret.
   * If provided, it references a key that customers will be required to ensure the policies are established
   * to permit GoldenGate to use this Secret.
   *
   */
  "walletSecretId": string;
  /**
   * The operation type of the deployment wallet.
   *
   */
  "deploymentWalletOperationType": model.DeploymentWalletOperationType;
  /**
   * The status of the deployment wallet.
   *
   */
  "deploymentWalletOperationStatus": model.DeploymentWalletStatus;
  /**
   * The date and time the request was started. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeStarted": Date;
  /**
   * The date and time the request was finished. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeCompleted"?: Date;
}

export namespace DeploymentWalletsOperationSummary {
  export function getJsonObj(obj: DeploymentWalletsOperationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeploymentWalletsOperationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
