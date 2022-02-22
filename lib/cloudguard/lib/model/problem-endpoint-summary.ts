/**
 * Cloud Guard API
 * Use the Cloud Guard API to automate processes that you would otherwise perform through the Cloud Guard Console.

**Note:** You can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Problem endpoints summary.
 */
export interface ProblemEndpointSummary {
  /**
   * Unique identifier for problem endpoint.
   */
  "id": string;
  /**
   * Unique id for sighting associated with the endpoint.
   */
  "sightingId": string;
  /**
   * Unique id for cloudguard problem
   */
  "problemId": string;
  /**
   * Identifier for the sighting type
   */
  "sightingType": string;
  /**
   * Display Name of the sighting type
   */
  "sightingTypeDisplayName": string;
  /**
   * IP Address of the Endpoint
   */
  "ipAddress": string;
  /**
   * IP Address type of the Endpoint
   */
  "ipAddressType": string;
  /**
   * IP Address classification type of the endpoint
   */
  "ipClassificationType"?: string;
  /**
   * Country of the endpoint
   */
  "country"?: string;
  /**
   * Latitude of the endpoint Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "latitude"?: number;
  /**
   * Longitude of the endpoint Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "longitude"?: number;
  /**
   * ASN number of the endpoint
   */
  "asnNumber"?: string;
  /**
   * Regions where activities were performed from this IP
   */
  "regions"?: Array<string>;
  /**
   * Services where activities were performed from this IP
   */
  "services"?: Array<string>;
  /**
   * Time when activities were last detected
   */
  "timeLastDetected": Date;
}

export namespace ProblemEndpointSummary {
  export function getJsonObj(obj: ProblemEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProblemEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
