/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about a pipeline task.
 */
export interface CreateTaskValidationFromPipelineTask extends model.CreateTaskValidationDetails {
  "pipeline"?: model.Pipeline;

  "modelType": string;
}

export namespace CreateTaskValidationFromPipelineTask {
  export function getJsonObj(
    obj: CreateTaskValidationFromPipelineTask,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTaskValidationDetails.getJsonObj(
            obj
          ) as CreateTaskValidationFromPipelineTask)),
      ...{
        "pipeline": obj.pipeline ? model.Pipeline.getJsonObj(obj.pipeline) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "PIPELINE_TASK";
  export function getDeserializedJsonObj(
    obj: CreateTaskValidationFromPipelineTask,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTaskValidationDetails.getDeserializedJsonObj(
            obj
          ) as CreateTaskValidationFromPipelineTask)),
      ...{
        "pipeline": obj.pipeline ? model.Pipeline.getDeserializedJsonObj(obj.pipeline) : undefined
      }
    };

    return jsonObj;
  }
}
