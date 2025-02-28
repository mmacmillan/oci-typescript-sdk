/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
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
 * The Streaming source.
 *
 */
export interface StreamingSourceDetails extends model.SourceDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the stream.
   *
   */
  "streamId": string;
  "cursor"?: model.TrimHorizonStreamingCursor | model.LatestStreamingCursor;

  "kind": string;
}

export namespace StreamingSourceDetails {
  export function getJsonObj(obj: StreamingSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SourceDetails.getJsonObj(obj) as StreamingSourceDetails)),
      ...{
        "cursor": obj.cursor ? model.StreamingCursorDetails.getJsonObj(obj.cursor) : undefined
      }
    };

    return jsonObj;
  }
  export const kind = "streaming";
  export function getDeserializedJsonObj(
    obj: StreamingSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceDetails.getDeserializedJsonObj(obj) as StreamingSourceDetails)),
      ...{
        "cursor": obj.cursor
          ? model.StreamingCursorDetails.getDeserializedJsonObj(obj.cursor)
          : undefined
      }
    };

    return jsonObj;
  }
}
