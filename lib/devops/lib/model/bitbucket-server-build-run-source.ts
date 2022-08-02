/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies details of build run through Bitbucket Server.
 */
export interface BitbucketServerBuildRunSource extends model.BuildRunSource {
  /**
   * The trigger that invoked the build run.
   */
  "triggerId": string;
  "triggerInfo": model.TriggerInfo;

  "sourceType": string;
}

export namespace BitbucketServerBuildRunSource {
  export function getJsonObj(
    obj: BitbucketServerBuildRunSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildRunSource.getJsonObj(obj) as BitbucketServerBuildRunSource)),
      ...{
        "triggerInfo": obj.triggerInfo ? model.TriggerInfo.getJsonObj(obj.triggerInfo) : undefined
      }
    };

    return jsonObj;
  }
  export const sourceType = "BITBUCKET_SERVER";
  export function getDeserializedJsonObj(
    obj: BitbucketServerBuildRunSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildRunSource.getDeserializedJsonObj(obj) as BitbucketServerBuildRunSource)),
      ...{
        "triggerInfo": obj.triggerInfo
          ? model.TriggerInfo.getDeserializedJsonObj(obj.triggerInfo)
          : undefined
      }
    };

    return jsonObj;
  }
}
