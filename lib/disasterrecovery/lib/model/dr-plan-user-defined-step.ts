/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * The details for a user-defined step in a DR Plan.
 */
export interface DrPlanUserDefinedStep {
  "stepType": string;
}

export namespace DrPlanUserDefinedStep {
  export function getJsonObj(obj: DrPlanUserDefinedStep): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "stepType" in obj && obj.stepType) {
      switch (obj.stepType) {
        case "INVOKE_FUNCTION":
          return model.InvokeFunctionStep.getJsonObj(
            <model.InvokeFunctionStep>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION_PRECHECK":
          return model.InvokeFunctionPrecheckStep.getJsonObj(
            <model.InvokeFunctionPrecheckStep>(<object>jsonObj),
            true
          );
        case "RUN_LOCAL_SCRIPT":
          return model.RunLocalScriptUserDefinedStep.getJsonObj(
            <model.RunLocalScriptUserDefinedStep>(<object>jsonObj),
            true
          );
        case "RUN_LOCAL_SCRIPT_PRECHECK":
          return model.LocalScriptPrecheckStep.getJsonObj(
            <model.LocalScriptPrecheckStep>(<object>jsonObj),
            true
          );
        case "RUN_OBJECTSTORE_SCRIPT_PRECHECK":
          return model.ObjectStoreScriptPrecheckStep.getJsonObj(
            <model.ObjectStoreScriptPrecheckStep>(<object>jsonObj),
            true
          );
        case "RUN_OBJECTSTORE_SCRIPT":
          return model.RunObjectStoreScriptUserDefinedStep.getJsonObj(
            <model.RunObjectStoreScriptUserDefinedStep>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.stepType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrPlanUserDefinedStep): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "stepType" in obj && obj.stepType) {
      switch (obj.stepType) {
        case "INVOKE_FUNCTION":
          return model.InvokeFunctionStep.getDeserializedJsonObj(
            <model.InvokeFunctionStep>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION_PRECHECK":
          return model.InvokeFunctionPrecheckStep.getDeserializedJsonObj(
            <model.InvokeFunctionPrecheckStep>(<object>jsonObj),
            true
          );
        case "RUN_LOCAL_SCRIPT":
          return model.RunLocalScriptUserDefinedStep.getDeserializedJsonObj(
            <model.RunLocalScriptUserDefinedStep>(<object>jsonObj),
            true
          );
        case "RUN_LOCAL_SCRIPT_PRECHECK":
          return model.LocalScriptPrecheckStep.getDeserializedJsonObj(
            <model.LocalScriptPrecheckStep>(<object>jsonObj),
            true
          );
        case "RUN_OBJECTSTORE_SCRIPT_PRECHECK":
          return model.ObjectStoreScriptPrecheckStep.getDeserializedJsonObj(
            <model.ObjectStoreScriptPrecheckStep>(<object>jsonObj),
            true
          );
        case "RUN_OBJECTSTORE_SCRIPT":
          return model.RunObjectStoreScriptUserDefinedStep.getDeserializedJsonObj(
            <model.RunObjectStoreScriptUserDefinedStep>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.stepType}`);
      }
    }
    return jsonObj;
  }
}
