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
 * The filters for the trigger.
 */
export interface Filter {
  "triggerSource": string;
}

export namespace Filter {
  export function getJsonObj(obj: Filter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "triggerSource" in obj && obj.triggerSource) {
      switch (obj.triggerSource) {
        case "DEVOPS_CODE_REPOSITORY":
          return model.DevopsCodeRepositoryFilter.getJsonObj(
            <model.DevopsCodeRepositoryFilter>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD":
          return model.BitbucketCloudFilter.getJsonObj(
            <model.BitbucketCloudFilter>(<object>jsonObj),
            true
          );
        case "GITLAB":
          return model.GitlabFilter.getJsonObj(<model.GitlabFilter>(<object>jsonObj), true);
        case "GITHUB":
          return model.GithubFilter.getJsonObj(<model.GithubFilter>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.triggerSource);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Filter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "triggerSource" in obj && obj.triggerSource) {
      switch (obj.triggerSource) {
        case "DEVOPS_CODE_REPOSITORY":
          return model.DevopsCodeRepositoryFilter.getDeserializedJsonObj(
            <model.DevopsCodeRepositoryFilter>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD":
          return model.BitbucketCloudFilter.getDeserializedJsonObj(
            <model.BitbucketCloudFilter>(<object>jsonObj),
            true
          );
        case "GITLAB":
          return model.GitlabFilter.getDeserializedJsonObj(
            <model.GitlabFilter>(<object>jsonObj),
            true
          );
        case "GITHUB":
          return model.GithubFilter.getDeserializedJsonObj(
            <model.GithubFilter>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.triggerSource);
      }
    }
    return jsonObj;
  }
}
