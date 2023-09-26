/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The details of the wrapped import Key.
 */
export interface WrappedImportKey {
  /**
   * The key material to import, wrapped by the vault's RSA public wrapping key and base64-encoded.
   */
  "keyMaterial": string;
  /**
   * The wrapping mechanism to use during key import.
   * `RSA_OAEP_AES_SHA256` invokes the RSA AES key wrap mechanism, which generates a temporary AES key. The temporary AES key is wrapped
   * by the vault's RSA public wrapping key, creating a wrapped temporary AES key. The temporary AES key is also used to wrap the private key material.
   * The wrapped temporary AES key and the wrapped exportable key material are concatenated, producing concatenated blob output that jointly represents them.
   * `RSA_OAEP_SHA256` means that the exportable key material is wrapped by the vault's RSA public wrapping key.
   *
   */
  "wrappingAlgorithm": WrappedImportKey.WrappingAlgorithm;
}

export namespace WrappedImportKey {
  export enum WrappingAlgorithm {
    RsaOaepSha256 = "RSA_OAEP_SHA256",
    RsaOaepAesSha256 = "RSA_OAEP_AES_SHA256"
  }

  export function getJsonObj(obj: WrappedImportKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WrappedImportKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
