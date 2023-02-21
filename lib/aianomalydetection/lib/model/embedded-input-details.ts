/**
 * Anomaly Detection API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * The request body when byte data is provided in detect call, which is Base64 encoded.
 * The default type of the data is CSV and can be JSON by setting the 'contentType'.
 *
 */
export interface EmbeddedInputDetails extends model.InputDetails {
  "contentType": EmbeddedInputDetails.ContentType;
  "content": string;

  "inputType": string;
}

export namespace EmbeddedInputDetails {
  export enum ContentType {
    Csv = "CSV",
    Json = "JSON"
  }

  export function getJsonObj(obj: EmbeddedInputDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.InputDetails.getJsonObj(obj) as EmbeddedInputDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const inputType = "BASE64_ENCODED";
  export function getDeserializedJsonObj(
    obj: EmbeddedInputDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputDetails.getDeserializedJsonObj(obj) as EmbeddedInputDetails)),
      ...{}
    };

    return jsonObj;
  }
}
