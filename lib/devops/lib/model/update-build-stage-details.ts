/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * Specifies the Build Stage.
 */
export interface UpdateBuildStageDetails extends model.UpdateBuildPipelineStageDetails {
  /**
   * Image name for the Build Environment
   */
  "image"?: string;
  /**
   * The path to the build specification file for this Environment. The default location if not specified is build_spec.yaml
   */
  "buildSpecFile"?: string;
  /**
   * Timeout for the Build Stage Execution. Value in seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "stageExecutionTimeoutInSeconds"?: number;
  "buildSourceCollection"?: model.BuildSourceCollection;
  /**
   * Name of the BuildSource in which the build_spec.yml file need to be located. If not specified, the 1st entry in the BuildSource collection will be chosen as Primary.
   */
  "primaryBuildSource"?: string;

  "buildPipelineStageType": string;
}

export namespace UpdateBuildStageDetails {
  export function getJsonObj(obj: UpdateBuildStageDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateBuildPipelineStageDetails.getJsonObj(obj) as UpdateBuildStageDetails)),
      ...{
        "buildSourceCollection": obj.buildSourceCollection
          ? model.BuildSourceCollection.getJsonObj(obj.buildSourceCollection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const buildPipelineStageType = "BUILD";
  export function getDeserializedJsonObj(
    obj: UpdateBuildStageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateBuildPipelineStageDetails.getDeserializedJsonObj(
            obj
          ) as UpdateBuildStageDetails)),
      ...{
        "buildSourceCollection": obj.buildSourceCollection
          ? model.BuildSourceCollection.getDeserializedJsonObj(obj.buildSourceCollection)
          : undefined
      }
    };

    return jsonObj;
  }
}
