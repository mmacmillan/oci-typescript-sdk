/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * Possible model types
 */
export interface ModelDetails {
  /**
   * supported language default value is en
   */
  "languageCode"?: string;

  "modelType": string;
}

export namespace ModelDetails {
  export function getJsonObj(obj: ModelDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "NAMED_ENTITY_RECOGNITION":
          return model.NamedEntityRecognitionModelDetails.getJsonObj(
            <model.NamedEntityRecognitionModelDetails>(<object>jsonObj),
            true
          );
        case "TEXT_CLASSIFICATION":
          return model.TextClassificationModelDetails.getJsonObj(
            <model.TextClassificationModelDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "NAMED_ENTITY_RECOGNITION":
          return model.NamedEntityRecognitionModelDetails.getDeserializedJsonObj(
            <model.NamedEntityRecognitionModelDetails>(<object>jsonObj),
            true
          );
        case "TEXT_CLASSIFICATION":
          return model.TextClassificationModelDetails.getDeserializedJsonObj(
            <model.TextClassificationModelDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
