/**
 *
 *
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
import stream = require("stream");

export interface GetRepositoryArchiveContentResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, provide the request ID.
   */
  "opcRequestId": string;
  /**
   * Content type refers to content of a file which is transferred via HTTP
   */
  "contentType": string;
  /**
   * The Content-Disposition response-header field has been proposed as a means for the origin server to suggest a default filename if the user requests that the content is saved to a file.
   */
  "contentDisposition": string;
  /**
   * The returned stream.Readable | ReadableStream instance.
   */
  "value": stream.Readable | ReadableStream;
}
