/**
 * Certificates Service Retrieval API
 * API for retrieving certificates.
 * OpenAPI spec version: 20210224
 *
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
 * The properties of a version of a bundle for a certificate authority (CA). Certificate authority bundle version summary objects do not include the actual contents of the certificate.
 *
 */
export interface CertificateAuthorityBundleVersionSummary {
  /**
   * The OCID of the certificate authority (CA).
   */
  "certificateAuthorityId": string;
  /**
   * A unique certificate identifier used in certificate revocation tracking, formatted as octets.
   * Example: `03 AC FC FA CC B3 CB 02 B8 F8 DE F5 85 E7 7B FF`
   *
   */
  "serialNumber"?: string;
  /**
   * An optional property indicating when the CA version was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The version number of the CA. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionNumber": number;
  /**
   * The name of the CA version. When this value is not null, the name is unique across CA versions for a given CA.
   *
   */
  "versionName"?: string;
  /**
   * The name of the CA.
   */
  "certificateAuthorityName": string;
  /**
   * An optional property indicating when to delete the CA version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  "validity"?: model.Validity;
  /**
   * A list of rotation states for this CA version.
   */
  "stages": Array<CertificateAuthorityBundleVersionSummary.Stages>;
  "revocationStatus"?: model.RevocationStatus;
}

export namespace CertificateAuthorityBundleVersionSummary {
  export enum Stages {
    Current = "CURRENT",
    Pending = "PENDING",
    Latest = "LATEST",
    Previous = "PREVIOUS",
    Deprecated = "DEPRECATED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CertificateAuthorityBundleVersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "validity": obj.validity ? model.Validity.getJsonObj(obj.validity) : undefined,

        "revocationStatus": obj.revocationStatus
          ? model.RevocationStatus.getJsonObj(obj.revocationStatus)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateAuthorityBundleVersionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "validity": obj.validity ? model.Validity.getDeserializedJsonObj(obj.validity) : undefined,

        "revocationStatus": obj.revocationStatus
          ? model.RevocationStatus.getDeserializedJsonObj(obj.revocationStatus)
          : undefined
      }
    };

    return jsonObj;
  }
}
