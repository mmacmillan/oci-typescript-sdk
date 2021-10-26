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
 * The contents of the certificate, properties of the certificate (and certificate version), and user-provided contextual metadata for the certificate.
 *
 */
export interface CertificateAuthorityBundle {
  /**
   * The OCID of the certificate authority (CA).
   */
  "certificateAuthorityId": string;
  /**
   * The name of the CA.
   */
  "certificateAuthorityName": string;
  /**
   * A unique certificate identifier used in certificate revocation tracking, formatted as octets.
   * Example: `03 AC FC FA CC B3 CB 02 B8 F8 DE F5 85 E7 7B FF`
   *
   */
  "serialNumber": string;
  /**
   * The certificate (in PEM format) for this CA version.
   */
  "certificatePem": string;
  /**
   * The certificate chain (in PEM format) for this CA version.
   */
  "certChainPem"?: string;
  /**
   * The name of the CA.
   */
  "versionName"?: string;
  /**
   * A property indicating when the CA was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The version number of the CA. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionNumber": number;
  "validity": model.Validity;
  /**
   * A list of rotation states for this CA.
   */
  "stages": Array<CertificateAuthorityBundle.Stages>;
  "revocationStatus"?: model.RevocationStatus;
}

export namespace CertificateAuthorityBundle {
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

  export function getJsonObj(obj: CertificateAuthorityBundle): object {
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
  export function getDeserializedJsonObj(obj: CertificateAuthorityBundle): object {
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
