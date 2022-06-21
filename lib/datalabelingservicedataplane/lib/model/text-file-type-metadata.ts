/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
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
 * Metadata for files with text content.
 */
export interface TextFileTypeMetadata {
  "formatType": string;
}

export namespace TextFileTypeMetadata {
  export function getJsonObj(obj: TextFileTypeMetadata): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "formatType" in obj && obj.formatType) {
      switch (obj.formatType) {
        case "DELIMITED":
          return model.DelimitedFileTypeMetadata.getJsonObj(
            <model.DelimitedFileTypeMetadata>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.formatType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TextFileTypeMetadata): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "formatType" in obj && obj.formatType) {
      switch (obj.formatType) {
        case "DELIMITED":
          return model.DelimitedFileTypeMetadata.getDeserializedJsonObj(
            <model.DelimitedFileTypeMetadata>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.formatType);
      }
    }
    return jsonObj;
  }
}
