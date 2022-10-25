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
 * Possible NER model error analysis
 */
export interface NamedEntityRecognitionEvaluationResult extends model.EvaluationResultSummary {
  /**
   * For CSV format location is rowId(1 is header) and for JSONL location is jsonL line sequence(1 is metadata)
   */
  "record": string;
  /**
   * List of true(actual) entities in test data for NER model
   */
  "trueEntities": Array<model.EntityLabelErrorAnalysis>;
  /**
   * List of true(actual) entities in test data for NER model
   */
  "predictedEntities": Array<model.EntityLabelErrorAnalysis>;

  "modelType": string;
}

export namespace NamedEntityRecognitionEvaluationResult {
  export function getJsonObj(
    obj: NamedEntityRecognitionEvaluationResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EvaluationResultSummary.getJsonObj(
            obj
          ) as NamedEntityRecognitionEvaluationResult)),
      ...{
        "trueEntities": obj.trueEntities
          ? obj.trueEntities.map(item => {
              return model.EntityLabelErrorAnalysis.getJsonObj(item);
            })
          : undefined,
        "predictedEntities": obj.predictedEntities
          ? obj.predictedEntities.map(item => {
              return model.EntityLabelErrorAnalysis.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "NAMED_ENTITY_RECOGNITION";
  export function getDeserializedJsonObj(
    obj: NamedEntityRecognitionEvaluationResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.EvaluationResultSummary.getDeserializedJsonObj(
            obj
          ) as NamedEntityRecognitionEvaluationResult)),
      ...{
        "trueEntities": obj.trueEntities
          ? obj.trueEntities.map(item => {
              return model.EntityLabelErrorAnalysis.getDeserializedJsonObj(item);
            })
          : undefined,
        "predictedEntities": obj.predictedEntities
          ? obj.predictedEntities.map(item => {
              return model.EntityLabelErrorAnalysis.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
